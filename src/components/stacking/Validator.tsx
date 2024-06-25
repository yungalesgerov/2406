import React, { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Transaction, SystemProgram } from "@solana/web3.js";

const Validator = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    const [validatorPubkey, setValidatorPubkey] = useState("");

    const handleDelegateStake = async () => {
        if (!publicKey) {
            alert("Connect your wallet first");
            return;
        }

        const validatorPublicKey = new PublicKey(validatorPubkey);
        const transaction = new Transaction().add(
            SystemProgram.delegate({
                stakePubkey: publicKey,
                authorizedPubkey: publicKey,
                votePubkey: validatorPublicKey,
            }),
        );

        try {
            const signature = await sendTransaction(transaction, connection);
            await connection.confirmTransaction(signature, "confirmed");
            alert("Stake delegated successfully");
        } catch (error) {
            console.error(error);
            alert("Failed to delegate stake");
        }
    };

    return (
        <div>
            <h2>Delegate to Validator</h2>
            <input
                type="text"
                placeholder="Validator Public Key"
                value={validatorPubkey}
                onChange={(e) => setValidatorPubkey(e.target.value)}
            />
            <button onClick={handleDelegateStake}>Delegate Stake</button>
        </div>
    );
};

export default Validator;
