import Link from 'next/link';



const Nav = () => {
    return ( 
       <nav>
        <ul class="nav justify-content-center">
  <li class="nav-item">
  <Link href="/"><a class="nav-link active" aria-current="page">Home</a></Link>
  </li>
  <li class="nav-item">
  <Link href="../1"><a class="nav-link active" aria-current="page">Jo</a></Link>
  </li>
  <li class="nav-item">
  <Link href="../2"><a class="nav-link active" aria-current="page">Mary</a></Link>
  </li>
  <li class="nav-item">
  <Link href="../3"><a class="nav-link active" aria-current="page">Sally</a></Link>
  </li>
  <li class="nav-item">
  <Link href="../4"><a class="nav-link active" aria-current="page">Tommy</a></Link>
  </li>
</ul>
        
         </nav>
     );
}
 
export default Nav;