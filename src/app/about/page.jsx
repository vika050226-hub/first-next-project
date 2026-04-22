import ContactsLink from "@/components/ContactsLink";

export default function About(){
    return(
        <div>
        <header>
            <h1>О нас</h1>
        </header>
            <ContactsLink link={"main"} text={"Перейдите на главную страницу"} />
            <div className={"container"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci amet blanditiis dignissimos doloribus ducimus enim est ipsa quas quia quis repellat reprehenderit, sunt temporibus, voluptatem. Commodi consequuntur doloribus dolorum eligendi, hic itaque laboriosam mollitia non, perferendis possimus qui quibusdam ratione reiciendis, rem rerum similique tempora ullam veniam voluptatibus voluptatum! Aliquam eligendi facere magni quia vero! Dolor magnam numquam perspiciatis quaerat, ratione rerum sed veniam voluptas. Autem deserunt dolor illo libero nihil numquam placeat porro! Ad deleniti doloremque earum eos id impedit laboriosam magni officiis omnis repellat. Assumenda atque cumque dolore ducimus exercitationem fugiat, minima placeat quae, quasi quod reprehenderit similique tempora voluptate. Adipisci assumenda blanditiis illo illum iste optio quam quod tenetur! Architecto enim eveniet excepturi iure quam quidem sint. Accusantium aliquam amet animi aperiam commodi consequatur corporis cum dicta dolores eligendi et excepturi facilis fuga illo ipsa labore laboriosam laborum magnam minima molestias nihil odio pariatur provident quam quasi quis quos rem rerum sequi suscipit, unde vero voluptatibus voluptatum? Amet asperiores aspernatur, autem consequuntur ipsum iste maxime modi odit, perspiciatis quaerat quod ratione repellendus, rerum sapiente sed soluta voluptatum. Ab accusantium ad amet aperiam architecto deserunt dolor dolorum esse fugiat illo nostrum, pariatur reprehenderit sequi totam voluptatibus voluptatum.
            </div>
            <div><img src="/img.png" alt='Картинка котика' width={300} height={300}/>
                <img src="/img_1.png" alt='Картинка котика' width={500} height={300}/>
                <img src="/img_2.png" alt='Картинка котика' width={300} height={300}/></div>
        </div>
    )
}