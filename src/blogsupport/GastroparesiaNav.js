import React from 'react'

import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';

import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';

import { Link } from 'gatsby';


export const GastroparesiaNav = () => {
  return (
      <div className="">
 

                <Card className="my-6">
                    <CardContent>
                        <p className="m-0 text-center underline">
                        Mas sobre la Gastroparesia
                        </p>
                    </CardContent>
                    <CardActions className="grid grid-cols-2 md:grid-cols-3">
                        <Button size="small"><Link to="/dolor-estomacal-en-losas-diabeticosas/">Introducción</Link></Button>
                        <Button size="small"><Link to="/gastroparesia-sintomas/">Síntomas</Link></Button>
                        <Button size="small"><Link to="/gastroparesia-factores-riesgo/">Factores de Riesgo</Link></Button>
                        <Button size="small"><Link to="/gastroparesia-complicaciones/">Complicaciones</Link></Button>      
                        <Button size="small"><Link to="/gastroparesia-diagnostico/">Diagnostico</Link></Button>
                        <Button size="small"><Link to="/gastroparesia-tratamiento/">Tratamiento</Link></Button>
                        <Button size="small"><Link to="/gastroparesia-consejo-dieta/">Consejos Dieta</Link></Button>
                    </CardActions>
                </Card>

      </div>



   
  );
}
