import {times} from "lodash";

import postulacion from './postulacion.json';

export const mockPostulacion = postulacion;

export const mockTop = times(5, () => postulacion);

export const mockProvincias = ["Buenos Aires", "Mendoza", "Santa Fe", "San Juan"];

export const mockAreas = ["Informática", "Biología"];

export const mockAreasSelect = mockAreas.map((area) => ({label: area, value: area}))

export const mockProvinciasSelect = mockProvincias.map((prov) => ({label: prov, value: prov}))