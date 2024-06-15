import './App.css';
function Panad(props){
    return(
        
        <div className='Principal'>
            
            <div className='Header'>
                <div className="div">
                    <div className="contenedor">
                        <nav class="navbar navbar-expand-lg  bg-primary-tertiary">
                            <div class="container-fluid">
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li class="nav-item">
                                                <a className="nav-link active bg-light rounded-3" aria-current="page" href="Panaderia.js">Inicio</a>
                                            </li>
                                            
                                            <li class="nav-item">
                                                <a className="nav-link btn btn-outline-secondary" href="acerca-de">Acerca de</a>
                                            </li>
                                            <li class="nav-item">
                                                <a className="nav-link btn btn-outline-secondary" href="tipospan">Panes mas comunes</a>
                                            </li>
                                            <li class="nav-item">
                                                <a className="nav-link btn btn-outline-secondary" href="galeria">Galeria</a>
                                            </li>
                                            <li class="nav-item">
                                                <a className="nav-link btn btn-outline-secondary" href="ofertas">Ofertas de pago</a>
                                            </li>
                                            <li class="nav-item">
                                                <a className="nav-link btn btn-outline-secondary" href="ubicacion">Ubicacion</a>
                                            </li>
                                            <li class="nav-item rounded-3">
                                                <a class="nav-link btn btn-outline-secondary" href="contacto">Contactos</a>
                                            </li>
                                        </ul>
                                        <div className="titulo-empresa">
                                            <h1>El Rincón del Panadero</h1>
                                            <h2>{props.nombre}</h2>
                                        </div>
                                    </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <br></br>
            <section id="acerca-de" class="acerca-de">
                
                <div class="contenedor">
                <img src='panaderia1.webp'></img>
                    <h3>Acerca de</h3>
                    <p> Nuestra experiencia con cuatro generaciones de trabajo hasta la fecha, tiene sus inicios en la ciudad de {props.ciudad} el año 1925; con la iniciativa del Sr. Bismark quien realiza el proceso de pan con harina de trigo y aplica por primera vez en la ciudad, el manejo de la levadura en panificación. siguiendo la fabricación de forma artesanal. Con el emprendimiento creativo, dan inicio a la diversificación de los productos y al mejoramiento tecnológico con la compra de maquinaria moderna. la línea de repostería y confitería, desarrollando nuevos productos para eventos infantiles y de fiesta. Actualmente, estamos trabajando en nuevos proyectos sobre futuras ampliaciones, tanto en panadería como en pastelería en otros sectores de la ciudad.</p>
                </div>
            </section>
            <br></br>
            <section class="tipospan" id="tipospan">
                <div class="contenedor">
                    <h3>Panes mas comunes</h3>
                    <div>
                        <article>
                            <img src='panaderia2.jpg'></img>
                            <p class="titulo-plan">Pan molde Integral</p>
                            <p class="texto-plan">Muchos de ustedes aman mi receta de pan blanco y quise darles ésta opción de pan de molde integral que tiene mayor contenido de fibra y es súper súper rico. La miga es suavecita y es un muy buen pan para hacer si nunca has usado levadura antes.</p>
                            <a href="#" class="boton-plan">Leer más</a>
                        </article>
                        <article>
                            <img src='panaderia3.jpg'></img>
                            <p class="titulo-plan">Pan integral</p>
                            <p class="texto-plan">El pan integral, también conocido como pan moreno o pan marrón, es aquel pan que ha sido elaborado con harina no refinada, es decir, que se ha dejado el grano integral, lo que incluye el salvado,1​ por lo que posee una gran cantidad de fibra dietética, a diferencia del pan blanco, que sí está refinado. Es uno de los alimentos integrales más populares. También, ciertos panes elaborados «a la manera tradicional» son denominados «integrales», como el pan de soda irlandés.2​</p>
                            <a href="#" class="boton-plan">Leer más</a>
                        </article>
                        <article>
                            <img src='panaderia4.webp'></img>
                            <p class="titulo-plan">Palitos integrales</p>
                            <p class="texto-plan">Los Palitos Integrales El Germano son un delicioso y saludable tentempié que combina sabor y nutrición. Estos palitos están elaborados con ingredientes integrales de alta calidad, como harina de trigo integral y semillas, proporcionando una fuente natural de fibra y nutrientes esenciales. Su textura crujiente y su sabor delicado los convierten en una opción ideal para disfrutar en cualquier momento del día. Además y no contienen colesterol,</p>
                            <a href="#" class="boton-plan">Leer más</a>
                        </article>
                        
                    </div>
                </div>
            </section>

            <section class="galeria" id="galeria">
                <div class="contenedor">
                    <br></br><br></br>
                    <h3>Galeria</h3>
                    <div>
                        <article>
                            <img src={props.imagen1}></img>
                            <p class="titulo-plan">Pan molde Integral</p>
                        </article>
                        <article>
                            <img src={props.imagen2}></img>
                            <p class="titulo-plan">Pan integral</p>
                        </article>
                        <article>
                            <img src={props.imagen3}></img>
                            <p class="titulo-plan">Palitos integrales</p>
                        </article>
                        
                    </div>
                    <br></br>
                    <div>
                        <article>
                            <img src={props.imagen4}></img>
                            <p class="titulo-plan">Pan maraqueta</p>
                        </article>
                        <article>
                            <img src={props.imagen5}></img>
                            <p class="titulo-plan">Pan cochabanbino</p>
                        </article>
                        <article>
                            <img src={props.imagen6}></img>
                            <p class="titulo-plan">Pan esponjoso casero</p>
                        </article>
                        
                    </div>
                </div>
            </section>
            <br></br><br></br>

            <section class="ofertas" id="ofertas">
                <div class="contenedor">
                    <h3>Ofertas de pago</h3>
                    <table class="tabla-principal">
                        <tr>
                            <th class="texto-oscuro">Precio menor de panes<br></br>$ 9</th>
                            <th class="verde">Precio regular de panes <br></br>$ 19</th>
                            <th class="texto-naranja">Panes especiales y de mayor precio <br></br>$ 99</th>
                        </tr>
                            <tr>
                            <td>{props.unidad1}</td>
                            <td class="verde">{props.unidad2}</td>
                            <td>{props.unidad3}</td>
                        </tr>
                        <tr>
                            <td>cantidad 2</td>
                            <td class="verde">cantidad 8</td>
                            <td>cantidad 19</td>
                        </tr>
                        <tr>
                            <td><a href="#">{props.compra}</a></td>
                            <td class="verde"><a href="#">{props.compra}</a></td>
                            <td><a href="#">{props.compra}</a></td>
                        </tr>
                    </table>
                    
                </div>
            </section>
            <br></br><br></br>
            <section class="contacto" id="contacto">
                <div class="contenedor">
                    <h3>Contáctanos</h3>
                    <form action="">
                        <input type="text" placeholder="Nombre:"></input>
                        <input type="email" placeholder="Correo:"></input>
                        <textarea placeholder="Mensaje:"></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </section>
            <br></br><br></br>
            <section class="ubicacion" id="ubicacion">
                <div class="contenedor">
                    <h3>Dirección y Horario de Atención</h3>
                    <div class="direccion">
                    <article>
                        <p>
                            Zona Unificada Potosi, Avenida Juana Calahumani Nro 1234
                            <br></br>
                            El Alto - La Paz - Bolivia
                        </p>
                    </article>
                    <article>
                        <p>
                            Lunes a Viernes
                            <br></br>
                            08:00 - 13:00
                        </p>
                    </article>
                    
                </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7650.821631624994!2d-68.13167578875489!3d-16.505345033812816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f207ad2aeca49%3A0x8a57920f1aed7e08!2sPlaza%20del%20Estudiante!5e0!3m2!1ses!2sbo!4v1718419769367!5m2!1ses!2sbo" text-align="center" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        
            </section>

            <footer>
                <div class="contenedor">
                <article class="redes">
                    <a href="" class="twiter"><i class="fab fa-twitter"></i></a>
                    <a href="" class="facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="" class="youtube"><i class="fab fa-youtube"></i></a>
                    <a href="" class="instagram"><i class="fab fa-instagram"></i></a>
                    <a href="" class="whatsapp"><i class="fab fa-whatsapp"></i></a>
                    </article>
                    <p>Desarrollado por: BISMARK CHOQUE SAIRE - copyright &#169;  2024 - Derechos Reservados</p>
                </div>
            </footer>



            



        </div>
    );
}

export default Panad;
