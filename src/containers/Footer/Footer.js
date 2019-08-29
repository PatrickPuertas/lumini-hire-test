import React from 'react';

 class Footer extends React.Component {
      render() {
          return (
            <div>
                <footer class="site-footer section block bg-1">
		<div class="container py-4">
			<div class="row align-items-center">
				<div class="col-md-5 text-center text-md-left">
					<nav class="nav justify-content-center justify-content-md-start">
						<a class="nav-item nav-link" href="#pricing">Preços</a>
						<a class="nav-item nav-link" href="#about">Sobre a CompIAnce</a>
						<a class="nav-item nav-link" href="#whyChoose">Porque a CompIAnce</a>
					</nav>
				</div>
				<div class="col-md-2 text-center">
					<img src="img/logo.png" alt="" class="logo"/>
				</div>
				<div class="col-md-5 text-center text-md-right">
					<p class="mt-2 mb-0 color-2 small">© 2019 Patrick Puertas. Todos os direitos reservados</p>
				</div>
			</div>
		</div>
	</footer>
            </div>
                              );
                          }
                      }
                    
 export default Footer;