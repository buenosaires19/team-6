import {times} from "lodash";

import postulacion from './postulacion.json';

export const mockPostulacion = postulacion[0];

export const mockTop =  postulacion;

export const mockProvincias = ["Buenos Aires", "Mendoza", "Santa Fe", "San Juan"];

export const mockAreas = ["Informática", "Biología"];

export const mockAreasSelect = mockAreas.map((area) => ({label: area, value: area}))

export const mockProvinciasSelect = mockProvincias.map((prov) => ({label: prov, value: prov}))