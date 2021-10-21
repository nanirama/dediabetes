import React from 'react'

import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';

import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';

import { Link } from 'gatsby';


export const HipoglucemiaNav = () => {
  return (
      <div className="">
 

                <Card className="my-6">
                    <CardContent>
                        <p className="m-0 text-center underline">
                        Mas sobre la Hipoglucemia
                        </p>
                    </CardContent>
                    <CardActions className="grid grid-cols-2 md:grid-cols-3">
                        <Button size="small"><Link to="/la-hipoglucemia-nivel-bajo-de-azucar-en-sangre/">Introducción</Link></Button>
                        <Button size="small"><Link to="/hipoglucemia-causas">Causas</Link></Button>
                        <Button size="small"><Link to="/hipoglucemia-factores-riesgo">Factores de Riesgo</Link></Button>
                        <Button size="small"><Link to="/hipoglucemia-signos-sintomas">Síntomas</Link></Button>
                        <Button size="small"><Link to="/hipoglucemia-diagnostico">Diagnostico</Link></Button>
                        <Button size="small"><Link to="/hipoglucemia-prevenir">Prevención</Link></Button>
                        <Button size="small"><Link to="/hipoglucemia-tratamiento">Tratamiento</Link></Button>
                    </CardActions>
                </Card>

      </div>



   
  );
}
