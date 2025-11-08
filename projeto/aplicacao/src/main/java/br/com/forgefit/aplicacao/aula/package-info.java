/**
 * Camada de aplicação para o contexto de Aulas.
 * 
 * <p>Este pacote contém os componentes da camada de aplicação responsáveis
 * por orquestrar operações relacionadas a aulas, seguindo os princípios de
 * Clean Architecture e DDD.</p>
 * 
 * <h2>Componentes principais:</h2>
 * <ul>
 *   <li>{@link br.com.forgefit.aplicacao.aula.AulaServicoAplicacao} - 
 *       Coordena casos de uso de consulta de aulas</li>
 *   <li>{@link br.com.forgefit.aplicacao.aula.AulaRepositorioAplicacao} - 
 *       Interface de repositório para consultas otimizadas</li>
 *   <li>{@link br.com.forgefit.aplicacao.aula.AulaResumo} - 
 *       DTO de leitura para listagem de aulas</li>
 *   <li>{@link br.com.forgefit.aplicacao.aula.AulaResumoExpandido} - 
 *       DTO expandido com detalhes completos</li>
 *   <li>{@link br.com.forgefit.aplicacao.aula.ReservaServicoAplicacao} - 
 *       Coordena operações de reserva</li>
 * </ul>
 * 
 * <h2>Padrões utilizados:</h2>
 * <ul>
 *   <li><b>Spring Data Projections</b> - DTOs implementados como interfaces</li>
 *   <li><b>Repository Pattern</b> - Abstração de acesso a dados</li>
 *   <li><b>Service Layer</b> - Coordenação de casos de uso</li>
 *   <li><b>Immutable DTOs</b> - Apenas getters, sem setters</li>
 * </ul>
 * 
 * @see br.com.forgefit.dominio.aula
 */
package br.com.forgefit.aplicacao.aula;
