# Método Simplex


Algoritmo Simplex
1. Estandarizar
	- Pasar a forma estándar: restricciones con =, agregar holguras u_i, x \ge 0._ 
2. Construir tableau inicial
	- Base inicial: variables de holgura.
	- Fila z con coeficientes negativos.
3. Elegir variable entrante
	- Columna con el coeficiente más negativo en la fila z.
4. Test de razón mínima (sobre la columna entrante)
	- Sea j la columna entrante.
	- Para cada fila i, calcular: $\frac{b\_i}{a_{ij}} \quad \text{solo si } a_{ij} > 0$
	- Elegir la menor razón positiva → variable saliente.
5. Pivotear
	- Normalizar la fila pivote (hacer pivote = 1).
	- Anular el resto de la columna (eliminación tipo Gauss).
6. Iterar
	Repetir desde el paso 3.
7. Condición de parada
	- Si no hay coeficientes negativos en la fila z → óptimo.
	- Si en el paso 4 no hay a_${ij} > 0$ → problema no acotado._

Lectura de la solución
```
•	Variables básicas = RHS
•	Variables no básicas = 0
•	Valor óptimo = RHS de z
```

Idea clave

El ratio test se hace únicamente sobre la columna de la variable entrante, porque mide cuánto podés aumentarla sin violar factibilidad.

