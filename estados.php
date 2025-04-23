<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

if (isset($_GET['sigla_pais'])) {
	$PaisSigla = $_GET['sigla_pais'];
	$txtInformacoes = file_get_contents('./paises_estados_cidades.json');
	$Informacoes = json_decode($txtInformacoes);


	$InformacoesFiltradas = array_filter($Informacoes, function ($element) {
		global $PaisSigla;
		return $element->sigla_pais == $PaisSigla;
	});
	$ListaEstados = [];
	foreach ($InformacoesFiltradas as $key => $value) {
		$QuantidadeEstados = count($InformacoesFiltradas[$key]->estados);
		for ($index = 0; $index < $QuantidadeEstados; $index++) {
			array_push($ListaEstados, $InformacoesFiltradas[$key]->estados[$index]->nome);
		}
	}
	echo json_encode($ListaEstados);
} else {
	echo '[]';
}
?>
