import React, { useState } from "react";
import './App.css';

function App() {
  const [n, Num] = useState(0);

  return (
    <div className="boxFooter">
            <ul className="listaIcon">
                <li id="li_1"><span className="icon"><AiIcons.AiOutlinePhone /></span> +55 (81) 98789-7689</li>
                <li id="li_2"><span className="icon"><HiIcons.HiOutlineMail /></span>free@gmail.com</li>
                <li id="li_3"><span className="icon"><FaIcons.FaRegCopyright /></span> 2021 - FREE Corporation - Todos os direitos reservados</li>
            </ul>
        </div>
  );
}

export default App

