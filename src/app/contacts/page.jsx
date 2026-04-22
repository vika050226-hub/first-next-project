'use client'
import ContactsLink from "@/components/ContactsLink";
import ClickAlert from "../../components/ClickAlert";


export default function Contacts(){
    return(
        <div>
            <header><h1>Контакты</h1></header>
            <div className={"container"}>
                <ContactsLink text={"Перейдите на главную страницу"} link={"main"}/><br/>
                <ClickAlert />

            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus exercitationem, quidem! Ab, ad cupiditate doloremque eaque facilis fugit ipsum iste officiis, perferendis porro possimus reprehenderit, sequi tempora ut veniam vero!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias, maiores. Accusamus ad alias amet atque consectetur eos est id illo mollitia porro. Eligendi eos eveniet libero quae quidem quod reprehenderit tempore. Architecto consequatur doloremque dolorum eveniet expedita ipsam, mollitia placeat quas rem reprehenderit. Aliquam architecto at autem cum dicta dolor, dolorem fugiat, libero, maiores maxime odio omnis optio placeat quas sint veniam vitae. Alias ipsa ipsam obcaecati odit reprehenderit? At blanditiis consectetur delectus dicta dolorum ea eum impedit ipsa, itaque labore laboriosam laudantium maxime modi molestias nam necessitatibus non nulla officia quia quis rem repellat repellendus sit tempora tenetur.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto aspernatur aut, blanditiis eaque earum inventore iure labore mollitia nesciunt quam rem repellat repudiandae soluta tempore, ut voluptatum! Amet, dolore doloremque molestiae officia sequi unde. Ab aliquam aliquid amet atque consequatur cumque, eligendi exercitationem fuga libero maxime odit quasi quibusdam quo repellendus suscipit tempora voluptatibus voluptatum. Autem, consequuntur delectus eius enim est et magnam mollitia nihil nobis, quo, sint tenetur ut vero. Alias aspernatur blanditiis consectetur hic ipsa itaque recusandae!
            </p>

            </div>
        </div>
    )
}