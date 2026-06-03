// Sierra & Company — deck content (built from the consulting scope document)
const LOGO = `<svg class="logo-mark" viewBox="0 0 120 70" aria-hidden="true">
  <path d="M2 60 L38 14 L52 34 L44 44 L34 32 L16 60 Z" fill="#23395d"/>
  <path d="M44 60 L66 26 L96 60 Z" fill="#9aa6b2"/>
  <path d="M52 44 L60 34 L70 48 Z" fill="#23395d"/></svg>`;

const WORD = `<div class="wordmark">SIERRA <span class="amp">&amp;</span> <span class="co">COMPANY</span></div>`;

const SLIDES = [
  // 1 — Cover
  `<section class="slide cover">
    ${LOGO}${WORD}
    <div class="tagline">Consultoria Financeira</div>
    <h2>Diagnóstico, estruturação e implantação assistida de gestão financeira, custos industriais e controles gerenciais.</h2>
    <div class="cv-foot">Manufatura &middot; Custos &middot; ERP &middot; Financeiro Gerencial</div>
  </section>`,

  // 2 — Quem somos
  `<section class="slide">
    <span class="kicker">Quem somos</span>
    <h1>Gestão que enxerga o custo e o resultado</h1>
    <p class="lead">Consultoria especializada em transformar dados operacionais em decisão. Atuamos de forma consultiva, analítica e gerencial para dar visibilidade de custos, organizar controles e estruturar a base financeira da sua indústria.</p>
    <div class="grid g3" style="margin-top:30px">
      <div class="card"><h3>Foco gerencial</h3><p>Identificamos gargalos operacionais e financeiros e criamos critérios claros de rateio, orçamento e DRE.</p></div>
      <div class="card"><h3>Base na operação</h3><p>Partimos do ERP e dos processos reais — compras, estoque, produção, comercial e financeiro.</p></div>
      <div class="card"><h3>Implantação assistida</h3><p>Não entregamos só relatórios: apoiamos a aplicação dos modelos e a rotina de acompanhamento.</p></div>
    </div>
  </section>`,

  // 3 — O desafio
  `<section class="slide">
    <div class="slide-head"><span class="bar"></span><span class="kicker" style="margin:0">O desafio</span></div>
    <h1>Quando a margem aperta e a visibilidade some</h1>
    <p class="lead">Indústrias crescem mais rápido do que seus controles. O resultado: custos opacos, decisões no escuro e planilhas paralelas que ninguém confia.</p>
    <ul class="checklist" style="margin-top:24px">
      <li>Margens comprimidas e despesas em alta sem causa clara</li>
      <li>Custo de produto e custo hora calculados fora do sistema</li>
      <li>Estoque do ERP que não bate com o estoque físico</li>
      <li>Centros de custos inativos ou usados de forma inconsistente</li>
      <li>Ausência de orçamento e de DRE gerencial confiável</li>
      <li>Dependência de pessoas e de planilhas críticas e manuais</li>
    </ul>
  </section>`,

  // 4 — Abordagem
  `<section class="slide">
    <span class="kicker">Nossa abordagem</span>
    <h1>Modular, por fases, no seu ritmo</h1>
    <p class="lead">O trabalho é conduzido por módulos — contratados integralmente ou por etapas, conforme a maturidade da empresa e a disponibilidade de dados.</p>
    <div class="grid g4" style="margin-top:30px">
      <div class="phase"><div class="accent"></div><div class="pnum">01</div><h3>Diagnóstico</h3><p>Entender empresa, processos, dados, ERP e principais problemas.</p></div>
      <div class="phase"><div class="accent"></div><div class="pnum">02</div><h3>Estruturação</h3><p>Centros de custos, plano de contas, rateios, custo hora, orçamento e DRE.</p></div>
      <div class="phase"><div class="accent"></div><div class="pnum">03</div><h3>Implantação</h3><p>Treinamento, rotina de fechamento, painel de indicadores e acompanhamento.</p></div>
      <div class="phase"><div class="accent"></div><div class="pnum">04</div><h3>Encerramento</h3><p>Relatório final, plano 30/60/90 dias, recomendações e pendências.</p></div>
    </div>
  </section>`,

  // 5 — 15 módulos
  `<section class="slide">
    <div class="slide-head"><span class="bar"></span><span class="kicker" style="margin:0">Escopo &middot; 15 módulos</span></div>
    <div class="grid g5">
      ${[
        ['01','Diagnóstico inicial'],['02','Mapeamento de processos'],['03','ERP'],['04','Centros de custos'],['05','Plano de contas gerencial'],
        ['06','Custos industriais'],['07','Custo hora'],['08','Orçamento'],['09','Plano de despesas'],['10','DRE gerencial'],
        ['11','Preço e margem'],['12','Fluxo de caixa'],['13','Indicadores'],['14','Governança'],['15','Plano de ação']
      ].map(m=>`<div class="card mod"><span class="num">${m[0]}</span><h3>${m[1]}</h3></div>`).join('')}
    </div>
  </section>`,

  // 6 — Pilares de custos
  `<section class="slide">
    <span class="kicker">Especialidade</span>
    <h1>Custos industriais sob controle</h1>
    <p class="lead">Modelamos o custo real do produto e da hora produtiva — base para preço, margem e decisão comercial.</p>
    <div class="grid g4" style="margin-top:30px">
      <div class="card"><div class="metric"><div class="val">7</div><div class="lbl">Critérios de rateio aplicáveis</div></div></div>
      <div class="card"><h3>Custo hora</h3><p>Por setor, máquina, linha ou centro produtivo, com teórico versus real.</p></div>
      <div class="card"><h3>Custo por produto</h3><p>Diretos, indiretos, perdas e refugos, com margem por produto e família.</p></div>
      <div class="card"><h3>Formação de preço</h3><p>Simulador de margem e identificação de produtos com rentabilidade negativa.</p></div>
    </div>
  </section>`,

  // 7 — Critérios de rateio
  `<section class="slide">
    <div class="slide-head"><span class="bar"></span><span class="kicker" style="margin:0">Critérios de rateio</span></div>
    <h1>Base para distribuir custos indiretos</h1>
    <p class="lead">Os critérios são escolhidos conforme o comportamento do custo, a operação da indústria e a disponibilidade de dados confiáveis no ERP.</p>
    <div class="criteria-block" style="margin-top:30px">
      <div class="criteria-item"><span>01</span><strong>Horas de mão de obra direta</strong></div>
      <div class="criteria-item"><span>02</span><strong>Horas máquina</strong></div>
      <div class="criteria-item"><span>03</span><strong>Volume produzido</strong></div>
      <div class="criteria-item"><span>04</span><strong>Consumo de matéria-prima</strong></div>
      <div class="criteria-item"><span>05</span><strong>Área ocupada por setor</strong></div>
      <div class="criteria-item"><span>06</span><strong>Número de colaboradores por centro de custo</strong></div>
      <div class="criteria-item"><span>07</span><strong>Receita ou margem por produto/família</strong></div>
    </div>
  </section>`,

  // 8 — DRE gerencial
  `<section class="slide">
    <div class="slide-head"><span class="bar"></span><span class="kicker" style="margin:0">DRE gerencial</span></div>
    <p class="lead" style="margin-bottom:18px">Modelo interno de gestão — visão mensal, acumulada e real versus orçamento.</p>
    <table class="dre">
      <thead><tr><th>Linha</th><th>Descrição</th></tr></thead>
      <tbody>
        <tr><td>Receita Bruta</td><td>Total faturado antes de deduções</td></tr>
        <tr><td>(-) Deduções</td><td>Impostos, devoluções, abatimentos</td></tr>
        <tr class="em"><td>Receita Líquida</td><td>Receita após deduções</td></tr>
        <tr><td>(-) CPV</td><td>Matéria-prima, mão de obra direta e custos industriais</td></tr>
        <tr class="em"><td>Margem Bruta</td><td>Receita líquida menos custos</td></tr>
        <tr><td>(-) Despesas Comerciais e Administrativas</td><td>Comissões, marketing, RH, TI, diretoria</td></tr>
        <tr class="em"><td>EBITDA Gerencial &rarr; Resultado Gerencial</td><td>Resultado final para gestão</td></tr>
      </tbody>
    </table>
  </section>`,

  // 9 — Entregáveis
  `<section class="slide">
    <span class="kicker">Entregáveis</span>
    <h1>21 entregáveis consolidados</h1>
    <ul class="checklist" style="margin-top:22px">
      <li>Diagnóstico empresarial e mapa de problemas</li>
      <li>Mapeamento de processos atuais e futuros</li>
      <li>Diagnóstico de uso do ERP</li>
      <li>Estrutura de centros de custos</li>
      <li>Plano de contas gerencial e critérios de rateio</li>
      <li>Modelo de custo hora e custo por produto</li>
      <li>Orçamento por centro de custo</li>
      <li>DRE gerencial e fluxo de caixa</li>
      <li>Modelo de formação de preço e simulador de margem</li>
      <li>Painel de indicadores e calendário de fechamento</li>
      <li>Matriz de responsabilidades</li>
      <li>Plano de ação 30/60/90 dias e relatório executivo</li>
    </ul>
  </section>`,

  // 10 — Transparência
  `<section class="slide">
    <div class="slide-head"><span class="bar"></span><span class="kicker" style="margin:0">Transparência</span></div>
    <h1>Consultivo por natureza</h1>
    <p class="lead">Nossa atuação é gerencial e de apoio à decisão. Deixamos claro o que está fora do escopo para evitar qualquer ambiguidade — e somar à sua equipe, não substituí-la.</p>
    <div class="grid g3" style="margin-top:28px">
      <div class="card"><h3>O que fazemos</h3><p>Diagnóstico, modelos, critérios, indicadores e recomendações de melhoria.</p></div>
      <div class="card"><h3>O que não fazemos</h3><p>Atividades contábeis oficiais, apuração fiscal, desenvolvimento de ERP ou decisão executiva.</p></div>
      <div class="card"><h3>Sem garantia de resultado</h3><p>A implantação depende da decisão e execução do cliente; orientamos o caminho.</p></div>
    </div>
  </section>`,

  // 11 — Por que Sierra
  `<section class="slide">
    <span class="kicker">Por que Sierra &amp; Company</span>
    <h1>Solidez para escalar com clareza</h1>
    <div class="grid g3" style="margin-top:30px">
      <div class="card"><div class="metric"><div class="val">15</div><div class="lbl">Módulos integrados de gestão</div></div></div>
      <div class="card"><div class="metric"><div class="val">4</div><div class="lbl">Fases — diagnóstico ao encerramento</div></div></div>
      <div class="card"><div class="metric"><div class="val">100%</div><div class="lbl">Foco em custos, margem e resultado</div></div></div>
    </div>
    <p class="lead" style="margin-top:26px">Metodologia que parte da realidade da operação, conecta o ERP ao financeiro gerencial e deixa rotina e governança funcionando depois que saímos.</p>
  </section>`,

  // 12 — CTA
  `<section class="slide cover cta">
    ${LOGO}${WORD}
    <div class="tagline">Consultoria Financeira</div>
    <h2>Vamos dar visibilidade aos seus custos e estrutura ao seu resultado.</h2>
  </section>`
];
