import React from "react";

export default function Sidebar() {
  return (
    <>  
        <ul className="flex flex-col items-start ml-6">
            <li className="hover:underline hover:text-blue-700"><a>Sobre mim</a></li>
            <ul className="flex flex-col items-start">
                <li className="hover:underline hover:text-blue-700"><a>Experiência profissional</a></li>
                <li className="ml-2 hover:underline hover:text-blue-700"><p>Resumo</p></li>
                <li className="ml-2 hover:underline hover:text-blue-700"><p>Experiências</p></li>
            </ul>
            
            <li className="hover:underline hover:text-blue-700"><a>Projetos</a></li>
            <li className="hover:underline hover:text-blue-700"><a>Contato</a></li>
        </ul>
    </>
  );
}
