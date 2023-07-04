/*
Operadores Lógicos:
&& -> and e 
|| -> or ou
! -> not não
*/

/*
TABELA VERDADE V = 1 | F = 0
    AND
V   V   V
V   F   F
F   V   F
F   F   F
    OR
V   V   V
V   F   V
F   V   V
F   F   F
*/

let n1, n2, n3, n4
n1 = 10
n2 = 5
n3 = 15
n4 = 2

if ((n1 > n2) && (n3 > n4)) {
    console.log('Verdadeiro')
}else {
    console.log('Falso')
}