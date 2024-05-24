/**Andres Felipe Franco Tellez - 20221978031 */

const app = new Vue({
	el: '#app',
	data: {
		Mensaje: 'Gestión de productos',
		Titulo: 'Productos',
		menu: ['Inicio', 'Productos', 'Contacto'],
		productos: [
			{ id: 1, nombre: 'Producto_Ejemplo1', precio: 5000, stock: 10 },
			{ id: 2, nombre: 'Producto_Ejemplo2', precio: 1000, stock: 0 },
			{ id: 3, nombre: 'Producto_Ejemplo3', precio: 40000, stock: 1 },
		],
		nuevo: '',
		valor: '',
		totalStock: 0,
		totaValor: 0,
		prodSelec: null
	},
	methods: {
		limpiar() {
			this.nuevo = '';
			this.valor = '';
			this.prodSelec = null;
		},

		agregarProducto() {
			if (this.nuevo !== '' && this.valor >= 0) {
				this.productos.push({
					id: this.productos.length + 1,
					nombre: this.nuevo,
					precio: this.valor,
					stock: 0
				});
			}
			this.limpiar();
		},

		eliminarProducto(item) {
			this.productos = this.productos.filter(p => p.id !== item.id);
		},

		editarProducto(item) {
			this.nuevo = item.nombre;
			this.valor = item.precio;
			this.prodSelec = item;
		},

		actualizarProducto() {
			if (this.nuevo !== '' && this.valor >= 0) {
				this.prodSelec.nombre = this.nuevo;
				this.prodSelec.precio = this.valor;
			}
			this.limpiar();
		},

		cancelarEdicion() {
			this.limpiar();
		}
	},
	computed: {
		sumarProductos() {
			return this.productos.length;
		},

		sumarStock() {
			this.totalStock = 0
			for (pt of this.productos) {
				this.totalStock = this.totalStock + pt.stock
			}
			return this.totalStock
		},
		sumarPrecio() {
			this.totaValor = 0
			for (pc of this.productos) {
				this.totaValor = this.totaValor + (pc.stock * pc.precio)
			}
			return this.totaValor
		}
	}
});
