export const ContactForm = () => {
    return (
        <form>
            <label>
                Имя:
                <input type="text" name="name" />
            </label>
            <label>
                Email:
                <input type="email" name="email" />
            </label>
            <label>
                Сообщение:
                <textarea name="message" />
            </label>
            <button type="submit">Отправить</button>
        </form>
    );
};
