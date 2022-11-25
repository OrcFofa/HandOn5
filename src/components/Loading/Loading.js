import loadingGif from "../../assets/img/loading.gif"
import "./Loading.css"

export const Loading = () => {
  return (
    <div className="loading">
       <img src={loadingGif} alt="icon loading" />
       <span>carregando...</span>
    </div>
  )
}
