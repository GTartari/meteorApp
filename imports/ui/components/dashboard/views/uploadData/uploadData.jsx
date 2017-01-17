import React, { Component, PropTypes } from 'react';

// components
import ContentHeader from '../content_header.jsx';


export default class UploadDataView extends Component {
	constructor(props) {
        super(props);
    }

		uploadFile(event) {
			let files = event.target.files;
			let file = files[0];
			let name = files[0].name;

			if (window.FileReader) {
			 // FileReader is supported.
			 // generate a new FileReader object
			 let reader = new FileReader();

			 reader.onload = function(event) {
				 let csv = reader.result;
				 // to split the csv file into rows to get the number of rows
				 let n = csv.split('\n').length;

				 d3.csv.parse(csv, function( d, i) {
					 d.Formato = +d.Formato;
					 d.Trait = +d.Trait;
					 d['Local Base'] = +d['Local Base'];
					 d.ProductNb = +d.ProductNb;
					 d.Itemprm = +d.Itemprm;
					 d.Contenido = +d.Contenido;
					 d['Edad Toma'] = +d['Edad Toma'];
					 d['Edad CamPre'] = +d['Edad CamPre'];
					 d.PVP = +d.PVP;
					 d['Mg Local'] = +d['Mg Local'];
					 d['Mg Bruto'] = +d['Mg Bruto'];
					 d['PVP Cmp Core'] = +d['PVP Cmp Core'];
					 d['POS Actual'] = +d['POS Actual'];
					 d.PVP_Nuevo = +d.PVP_Nuevo;
					 d['POS Nuevo'] = +d['POS Nuevo'];
					 d.Mrg_Nuevo = +d.Mrg_Nuevo
					 d.MD = +d.MD;
					 d.Venta = +d.Venta;
					 d['Costo Base'] = +d['Costo Base'];
					 d['Costo Promedio'] = +d['Costo Promedio'];
					 d['PVP MMPP'] = +d['PVP MMPP'];
					 d['POS MMPP '] = +d['POS MMPP '];
					 d['PVP Cmp Adi'] = +d['PVP Cmp Adi'];
					 d['PVP Cmp Prm'] = +d['PVP Cmp Prm'];
					 d['Mg OBJ'] = +d['Mg OBJ'];
					 d['Var Cst'] = +d['Var Cst'];
					 d['Var Cst Ini'] = +d['Var Cst Ini'];
					 d['On Hand'] = +d['On Hand'];
					 d['Efec Promo'] = +d['Efec Promo'];
					 d['Var PVP'] = +d['Var PVP'];
					 d.Accion = +d.Accion;
					 d['Sugerido Terminacion'] = +d['Sugerido Terminacion'];
					 d['Desc Error'] = +d['Desc Error'];
					 d.Cadena = +d.Cadena;

					 Meteor.call( 'dataUpload.insert', d, i, ( error, response ) => {
						 if ( error )
							 console.log( error.reason );
						 else {

						 }
					 })

					 // Verify if all the rows has been processed -
					 // i starts at 0 and there is a row for the headers, so we need to subtract 2
					 if(i == n-2){
						 console.log('upload terminado');
						 Bert.alert( 'Upload complete!', 'success', 'growl-top-right' );
					 } else {
						 console.log('error upload');
					 }
				 });
			 }
			 // when the file is read it triggers the onload event above.
			 reader.readAsText(file, 'UTF-8');
			} else {
			 Bert.alert('FileReader is not supported in this browser.');
			}
		}

    render() {
        return (
        	<div className="statistic-content">
	            <ContentHeader name="Statistics" description="statistics" breadcrumb="Statistics" breadcrumbIcon="fa fa-dashboard"/>

	            <section className="content"><span>UploadData</span></section>

						<input type="file" name="uploadCSV" onChange={this.uploadFile.bind(this)}/>
						<p><i className="fa fa-spin fa-refresh"></i>Uploading files...</p>
          </div>
        );
    }
}
