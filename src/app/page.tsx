import Description, { DatadescripType } from './components/Description';

const data: DatadescripType[] = [
	{ content1:{
		title:['Organisme','Type d’annonce','La Nature Du Marché','Montant De Cahier De Charge','Date de publication','Date de échéance'],
		text:['Ministère de la Défense Nationale','National et International','Fourniture','10,000,000 DA','2024/03/04','2024/03/12']},
	  content2:{
		title:['Pays','Ville','Commune','Adresse','Site Web'],
		text:['Algérie','Alger','Birtouta','Birtouta- Sidi Mhamed','www.mdn.dz']} ,
		content3:{title:['Secteur dactivité','Secteur dactivité','Secteur dactivité','Secteur dactivité']},
		typeS: 'any' }
];
export default function Home() {
return (
	<Description propData={data}/>
);
}