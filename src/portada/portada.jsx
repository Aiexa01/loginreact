
import './portada.css'
import './menu.css'
import './logo.css'
import './redsocial.css'
export const Portada = () => {

      return <div className="portada">
            <Menu></Menu>
            <Logo></Logo>
            <Redsocial></Redsocial>
      </div>
}
const Menu = () => {
      return <div className="menu centrar">
            <img src="/public/iconos/menu.svg" />
            <span>Menu</span>
      </div>
}
const Logo = () => {
      return <div className="logo centrar">
            <img src="iconos/logo.svg" />
            <span>ELBOD2i</span>
      </div>
}
const images=[
      "facebook",
      "instagram",
      "x"
]
const Redsocial = () => {

      return <div className="redsocial">
            {images.map(element => {
                  return <Iconoimage image={element}></Iconoimage>
            })}
      </div>
}

const Iconoimage=({image})=>{
            return <div className="container-redsocial">
                   <img src={"iconos/"+image+".svg"}/></div>

}