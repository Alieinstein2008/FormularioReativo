<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

if (isset($_GET['nome_estado'])) {
	$EstadoNome = $_GET['nome_estado'];
	$txtInformacoes = file_get_contents('./paises_estados_cidades.json');
	$Informacoes = json_decode($txtInformacoes);
	$ListaCidades = [];
	foreach ($Informacoes as $key => $element) {
		for ($indice = 0; $indice < count($element->estados); $indice++) {
			if ($element->estados[$indice]->nome === $EstadoNome) {
				for ($index = 0; $index < count($element->estados[$indice]->cidades); $index++) {
					$Cidade = $element->estados[$indice]->cidades[$index];
					array_push($ListaCidades, $Cidade);
				}

			}
		}
	}
	echo json_encode($ListaCidades);
} else {
	echo '[]';
}
?>
