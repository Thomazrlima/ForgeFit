import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveData, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-livro-pesquisa',
  imports: [],
  templateUrl: './livro-pesquisa.html',
  styleUrl: './livro-pesquisa.css',
})
export class LivroPesquisa implements OnInit {
  static readonly RECURSO = 'recurso'

  recurso: any

  constructor(private readonly rota: ActivatedRoute) { }

  ngOnInit() {
    this.recurso = this.rota.snapshot.data[LivroPesquisa.RECURSO]
  }
}

export const LIVRO_PESQUISA_RESOLVEDORES: ResolveData = {}
LIVRO_PESQUISA_RESOLVEDORES[LivroPesquisa.RECURSO] = (rota: ActivatedRouteSnapshot, estado: RouterStateSnapshot) => {
  return inject(HttpClient).get('/backend/livro/pesquisa?expandir=true')
}