import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

const BRL = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format;

window.BRL = BRL;
