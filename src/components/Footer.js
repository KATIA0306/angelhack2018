import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
          <footer class="footercolor">
           <div class="row">
               <div class="col-lg-8 col-md-8 col-sm-4 offset-lg-1">
                   <p>
                       <strong> About us </strong>
                   </p>
                   <p>
                       <strong> Culture </strong>
                   </p>
                   <p>
                       <strong> Blog </strong>
                   </p>
                   <p>
                       <strong> Careers </strong>
                   </p>
                   <p>
                       <strong> Contact </strong>
                   </p>
               </div>
           </div>

                   <div class="icons">
                       <p class="pspacing">Privacy</p>
                       <p class="pspacing">API</p>
                       <p class="pspacing">Policy </p>
                       <p class="pspacing">CSR</p>
                       <p class="pspacing">Security</p>
                       <p class="pspacing">Sitemap</p>
                        <ul class=" row list-inline ">
                           <li class="list-inline-item ">
                               <i class="fab fa-facebook"></i>
                           </li>
                           <li class="list-inline-item ">
                               <i class="fab fa-instagram"></i>
                           </li>
                           <li class="list-inline-item ">
                               <i class="fab fa-twitter"></i>
                           </li>
                       </ul>
                   </div>

       </footer>

        );
    }
}
