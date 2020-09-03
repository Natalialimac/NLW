import React from 'react';

import whatsapp from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://lh3.googleusercontent.com/jZ8JdvYkUNMasIPHwKPLhfaxtuOpodNtYgcg32rkLoI1nTGMINzX5oU-dQ8Q-1Zb6SlNUbiBPtTBH1yw5t758GBcRF4p_XYP68V9Dlo13NWe-rJB36lg4ZL8uPiKnJxXIJ-JPJLJeTXGf1QpjevkEJMkBiBen6CMG6Ow2raw084Mnfy9acx73H-Ng9zcJHxbImxH0aOwLwcOOzhKzPvRKJm7pF6CNV7_QkezYGkf6Q1g_88VRphbgHk1on0FXe_VQkBo0tkLdQAy-05Xr0y804pQEuwOCQ5sna2xAg1VTINcYPzDs4zAt1jQ8hyvNpdf-lxNdFul5Y0Yq50OfZcFL_R3glTt_VyhimVB6HCePvdABgY73_txmEbGyAw63g7jBcLHbUWHCHCjmRvzU4koJpyOiYM7DFd8YR0ij7AdUdpyYpiyybejbAKCTIffy3PyqXDVLqZWK37DjQXVnRIZNq_mX1rghJNWYND72JIrY_D_JzBtdDUb0GCZ5MDgdDw3n6mGubcAm_VCE0NhpVHMNNQ81x8Vln4BqUEk-Au6loiY_-LXmJFgbYeQ2a6oHr7R8McZsOTXzRvRdovyZiJKWrY7TvdbVNx0nd3A8q8R9kcydRP9UBYNVX6_-Ne5SEYxT3O3Qdf5vQP0VLqBkXT2P_I9O_omOSD-Z9_cIEmBCouWw9D89selwrjwrlx0LUY=s220-no?authuser=0" alt="Natália Lima"/>
            <div>
                <strong>Natália Lima</strong>
                <span>Matemática</span>
            </div>
            </header>
            <p>
            Algum texto sobre experiências em salas de aula.
            <br/> <br/>
            Muitas coisas passadas no sesi...
            </p>

            <footer>
            <p>
                Preço/hora
                 <strong>R$ 60.00</strong>
            </p>
            <button type="button">
                <img src={whatsapp} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
     </article>

    );
}

export default TeacherItem;