import "./style.scss";
import SwaperTest from "../../components/ui/carusel-test/index.jsx";
import SwerTest2 from "../../components/ui/carusel-test2/index.jsx";
function Index() {
  return <>
    <div className="container mx-auto px-2 5">
      <h1 className="text-center py-2 text-[20px] font-semibold">Asosiy</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ea recusandae sequi, distinctio quisquam, consectetur sed eaque magnam provident maiores ullam soluta. Ex, ullam. Illum esse aspernatur doloremque soluta voluptatum sit temporibus magnam labore. Quod obcaecati explicabo placeat quidem? Ea tempora ad odit minus ratione dignissimos suscipit repudiandae tempore, cupiditate quaerat in voluptas enim magnam laudantium? Rem vero incidunt cupiditate?</p>
    </div>
    <SwaperTest />
    <div className="continer mx-auto px-2.5 py-5 ">
       <h1 className="text-[20px] font-semibold text-center py-3">Carusel test 2</h1>
      <SwerTest2 />
    </div>

  </>
}

export default Index