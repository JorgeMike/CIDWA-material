# Importar pandas y matplotlib
import pandas as pd
import matplotlib.pyplot as plt

# Crear un DataFrame con algunos datos
data = {
    'Nombre': ['Juan', 'Ana', 'Pedro', 'María'],
    'Edad': [28, 34, 29, 32],
    'Ciudad': ['Madrid', 'Barcelona', 'Valencia', 'Bilbao']
}

df = pd.DataFrame(data)

# Crear un gráfico de barras de las edades
plt.figure(figsize=(8, 4))  # Opcional: especifica el tamaño de la figura
plt.bar(df['Nombre'], df['Edad'], color='skyblue')
plt.title('Edad por Nombre')
plt.xlabel('Nombre')
plt.ylabel('Edad')
plt.xticks(rotation=45)  # Opcional: rota los nombres para que sean más legibles
plt.tight_layout()  # Opcional: ajusta automáticamente los parámetros de la subtrama
plt.show()
