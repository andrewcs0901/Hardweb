const newLocal = newFunction();
var db = newLocal

function newFunction() {
    return {
        _noticias: [
            {
                //json da noticia principal terá como id 001
                id: 001,
                titulo: 'Google Stadia será mais poderoso que xbox One e ps4 juntos',
                imagem: 'https://cdn-istoedinheiro-ssl.akamaized.net/wp-content/uploads/sites/17/2019/03/c.jpg',
                imagemGrande: 'https://cdn-istoedinheiro-ssl.akamaized.net/wp-content/uploads/sites/17/2019/03/c.jpg',
                categoria: 'tecnologia',
                resumo: 'Lorem Stadia ipsum commodo ullamcorper facilisis rhoncus curabitur semper, massa fames posuere imperdiet mauris cras porttitor, id et sagittis integer ornare a. nam ultricies adipiscing molestie nunc scelerisque ipsum leo habitasse eget scelerisque sollicitudin, in donec vivamus pellentesque porta nec at nam placerat eros, a feugiat habitasse.',
                data: '06/05/2019',
                texto: '<div class="texto-noticia"><p>O Google anunciou hoje (19) o Stadia, sua própria e aguardada plataforma de games.</p><br><p>Trata-se de um serviço de streaming que promete levar jogos de ponta, que exigem hardware avançado para rodar, para basicamente qualquer dispositivo em qualquer parte do mundo.</p><br><p>Com ele, você poderá jogar via Chrome no PC, celular, tablet e TV, por exemplo Durante a apresentação, um dado interessante foi mostrado: o Stadia tem um poder gráfico que bate os dois principais consoles do mercado, PlayStation Pro e Xbox One X No total, a Stadia possui 10,7 Teraflops na GPU, enquanto o Xbox One X fica com 6,0 Teraflops e o PlayStation 4 Pro com 4,2 Teraflops Futuramente, o Stadia chegará aos 8K com 120 fps para games</p><br></div>'
            },
            {
                id: 002,
                titulo: 'Teaser da Nvidia sugere novidades da empresa para a Computex 2019',
                imagem: 'https://picsum.photos/300/200',
                resumo: 'Nvidia Lorem ipsum commodo ullamcorper facilisis rhoncus curabitur semper, massa fames posuere imperdiet mauris cras porttitor, id et sagittis integer ornare a. nam ultricies adipiscing molestie nunc scelerisque ipsum leo habitasse eget scelerisque sollicitudin, in donec vivamus pellentesque porta nec at nam placerat eros, a feugiat habitasse.',
                categoria: 'tecnologia',
                data: '15/05/2019'
            }, {
                id: 003,
                titulo: 'Xiaomi anuncia Redmi 7A, smartphone mais acessível da marca',
                imagem: 'https://picsum.photos/300/200',
                categoria: 'celular',
                resumo: 'Xiaomi Lorem ipsum commodo ullamcorper facilisis rhoncus curabitur semper, massa fames posuere imperdiet mauris cras porttitor, id et sagittis integer ornare a. nam ultricies adipiscing molestie nunc scelerisque ipsum leo habitasse eget scelerisque sollicitudin, in donec vivamus pellentesque porta nec at nam placerat eros, a feugiat habitasse.',
                data: '21/05/2019'
            }, {
                id: 004,
                titulo: 'outras noticias 3',
                imagem: 'https://picsum.photos/300/200',
                categoria: '',
                resumo: 'Noticias variadas Lorem ipsum commodo ullamcorper facilisis rhoncus curabitur semper, massa fames posuere imperdiet mauris cras porttitor, id et sagittis integer ornare a. nam ultricies adipiscing molestie nunc scelerisque ipsum leo habitasse eget scelerisque sollicitudin, in donec vivamus pellentesque porta nec at nam placerat eros, a feugiat habitasse.',
                data: '31/02/2019'
            }, {
                id: 005,
                titulo: 'Um milhão de PCs Windows estão abertos para ataque hacker ‘BlueKeep’',
                imagem: 'https://picsum.photos/300/200',
                categoria: 'segurançaweb',
                resumo: 'Windows Lorem ipsum commodo ullamcorper facilisis rhoncus curabitur semper, massa fames posuere imperdiet mauris cras porttitor, id et sagittis integer ornare a. nam ultricies adipiscing molestie nunc scelerisque ipsum leo habitasse eget scelerisque sollicitudin, in donec vivamus pellentesque porta nec at nam placerat eros, a feugiat habitasse.',
                data: '26/05/2019'
            }
        ],
        get noticias() {
            return this._noticias;
        },
        set noticias(value) {
            this._noticias = value;
        },
    };
}

