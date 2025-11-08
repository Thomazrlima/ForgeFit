import { Routes } from '@angular/router';
import { LIVRO_PESQUISA_RESOLVEDORES, LivroPesquisa } from './livro-pesquisa/livro-pesquisa';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/livro/pesquisa',
        pathMatch: 'full'
    },
    {
        path: 'livro/pesquisa',
        component: LivroPesquisa,
        resolve: LIVRO_PESQUISA_RESOLVEDORES
    }
];