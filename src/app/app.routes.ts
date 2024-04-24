import { Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

export const routes: Routes = [
    {path: 'productos', component: ProductosComponent}, 
    {path: 'categorias', component: CategoriasComponent},
    {path: 'home', component: HomeComponent},
    {path: 'cliente', component:ClienteComponent},
    {path: 'navBar', component:NavBarComponent}
];
