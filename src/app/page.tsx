import style from "./style.module.css"
import Link from "next/link";

 function Home(){
  return (
 <div className={style.main}> <h1>HOME  PAGE</h1>
<ul className={style.main2}>
  <li > <Link href="./about">About</Link></li>
  <li><Link href={"./contact"}>Contact</Link></li>
  <li><Link href={"./service"}>Service</Link></li>
  <li> <Link href={"./service/product"}>Nested page</Link></li>
 </ul>
 </div>
  );
}
export default Home;
