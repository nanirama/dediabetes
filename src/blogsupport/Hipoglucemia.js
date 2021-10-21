import React from 'react'

import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';

import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';

import Box from '@material-ui/core/Box'

import { Link } from 'gatsby';


export const Hipoglucemia = () => {
  return (
      <div className="grid grid-cols-1">

 

                <Card className="my-6">
                    <CardContent>
                        <h2 className="text-xl leading-5">
                        Causas
                        
                        </h2>
                        <p>
                        La mayoría de los casos de hipoglucemia ocurren en adultos con diabetes mellitus (DM). A pesar de que la diabetes se caracteriza por niveles altos de glucosa en sangre (hiperglucemia) que requiere disminuir los niveles del azúcar en la sangre, la hipoglucemia suele darse con frecuencia en esta enfermedad.
                        </p>
                        <p>Entender la causa de la hipoglucemia es importante para corregirla.
                        </p>
                    </CardContent>
                    <CardActions>
                        <Button size="small"><Link to="/hipoglucemia-causas/">Sigue Leyendo</Link></Button>
                    </CardActions>
                </Card>


                <Card className="my-6">
                    <CardContent>
                    <h2 className="text-xl leading-5">
                        Factores de Riesgo
                        
                        </h2>
                        <p>
                        Varios estudios han investigado los factores de riesgo para hipoglucemia severa. Se habla de hipoglucemia severa o grave cuando la persona afectada requiere asistencia para el tratamiento del episodio.

                        </p>
                    </CardContent>
                    <CardActions>
                    
                        <Button size="small"><Link to="/hipoglucemia-factores-riesgo/">Sigue Leyendo</Link></Button>
                    </CardActions>
                </Card>

                <Card className="my-6">
                    <CardContent>
                    <h2 className="text-xl leading-5">
                    Cuales son los Sintomas
                        
                        </h2>
                        <p>
                        Los síntomas de hipoglucemia varían según la duración y la severidad de la misma. Los síntomas de nivel bajo de azúcar pueden incluir dolor de cabeza, aumento del ritmo cardíaco (taquicardia) y visión borrosa, entre otros.

                        </p>
                    </CardContent>
                    <CardActions>
                        <Button size="small"><Link to="/hipoglucemia-signos-sintomas/">Sigue Leyendo</Link></Button>
                    </CardActions>
                </Card>

                <Card className="my-6">
                    <CardContent>
                    <h2 className="text-xl leading-5">
                    Diagnóstico
                         
                        </h2>
                        <p>
                        El diagnóstico y tratamiento rápido de la hipoglucemia es esencial. </p>
                        <p>Es recomendable que si muestras síntomas de hipoglucemia, evalúes tus niveles de azúcar con la ayuda de un glucómetro o de medidores continuos de glucosa para detectar si existe una condición de azúcar baja en sangre.

                        </p>
                    </CardContent>
                    <CardActions>
                        <Button size="small"><Link to="/hipoglucemia-diagnostico/">Sigue Leyendo</Link></Button>
                    </CardActions>
                </Card>

                <Card className="my-6">
                    <CardContent>
                    <h2 className="text-xl leading-5">
                    Prevención
                        </h2>
                        <p>
                        Prevenir la hipoglucemia requiere conocer y tratar el mecanismo por el que sucede. Puede requerir un buen manejo del tratamiento con insulina (por ejemplo, ajustes a la dosis de insulina), ajustes de las dosis de medicinas para la diabetes, cambios de estilo de vida como ejercicio físico, entre otras cosas.

                        </p>
                    </CardContent>
                    <CardActions>
                        <Button size="small"><Link to="/hipoglucemia-prevenir/">Sigue Leyendo</Link></Button>
                    </CardActions>
                </Card>
                <Card className="my-6">
                    <CardContent>
                    <h2 className="text-xl leading-5">
                    Tratamiento
                          
                        </h2>
                        <p>
                        La hipoglucemia es una emergencia que puede tener consecuencias negativas. Debe tratarse la hipoglucemia con rapidez para evitar complicaciones y estar muy pendientes de los síntomas de la hipoglucemia.
                        </p>

                        <p>

                        Una situación crítica puede requerir el tratamiento inmediato con una inyección de glucagón usando un kit de glucagón.
                        </p>
                        

                        
                    </CardContent>
                    <CardActions>
                    <Button size="small"><Link to="/hipoglucemia-tratamiento/">Sigue Leyendo</Link></Button>
                    </CardActions>
                </Card>
                

      </div>



   
  );
}
