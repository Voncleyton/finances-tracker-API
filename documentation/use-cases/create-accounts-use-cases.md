> ## Dados
  * id
  * name
  * description ?
  * type ##DEFINIR ENUM
  * balance
  * hide_appointments ? -> default: false


> # Fluxo principal
  1. Receber os dados
  2. Validar dados obrigatórios
  3. Valida se nome já existe
  4. Valida se balance é 0 ou maior
  5. Validar se o código do banco é válido
  6. Criar noma conta

> # Fluxo alternativo: Já existe Conta com o mesmo nome
  1. retorna erro

> # Fluxo alternativo: Balance passado é menor que 0
  1. retorna erro

> # Fluxo alternativo: Código do banco é inválido
  1. retorna erro
