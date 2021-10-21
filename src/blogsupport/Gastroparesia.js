import React from 'react'

import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';

import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';

import Box from '@material-ui/core/Box'

import { Link } from 'gatsby';


export const Gastroparesia = () => {
  return (
      <div className="grid grid-cols-1">

 

                <Card className="my-6">
                    <CardContent>
                        <h2 className="text-xl leading-5">
                        Sintomas
                        
                        </h2>
                        <p>
                        La sintomatología de la gastroparesia podrá ser muy leve o muy acontecida, y podrá aparecer en cualquier momento.
                        </p>
                    </CardContent>
                    <CardActions>
                        <Button size="small"><Link to="/gastroparesia-sintomas/">Sigue Leyendo</Link></Button>
                    </CardActions>
                </Card>


                <Card className="my-6">
                    <CardContent>
                    <h2 className="text-xl leading-5">
                        Factores de Riesgo
                        
                        </h2>
                        <p>
                        Es más común en personas que tienen niveles altos y descontrolados de glucosa en sangre por largos periodos de tiempo.

                        </p>
                    </CardContent>
                    <CardActions>
                    
                        <Button size="small"><Link to="/gastroparesia-factores-riesgo/">Sigue Leyendo</Link></Button>
                    </CardActions>
                </Card>

                <Card className="my-6">
                    <CardContent>
                    <h2 className="text-xl leading-5">
                    Sintomas
                        
                        </h2>
                        <p>
                        La sintomatología de la gastroparesia podrá ser muy leve o muy acontecida, y podrá aparecer en cualquier momento.

                        </p>
                    </CardContent>
                    <CardActions>
                        <Button size="small"><Link to="/gastroparesia-sintomas/">Sigue Leyendo</Link></Button>
                    </CardActions>
                </Card>

                <Card className="my-6">
                    <CardContent>
                    <h2 className="text-xl leading-5">
                    Diagnóstico
                         
                        </h2>
                        <p>
                        El médico tratante debe considerar una variedad de factores antes de diagnosticar la gastroparesia. 

                        </p>
                    </CardContent>
                    <CardActions>
                        <Button size="small"><Link to="/gastroparesia-diagnostico/">Sigue Leyendo</Link></Button>
                    </CardActions>
                </Card>
                <Card className="my-6">
                    <CardContent>
                    <h2 className="text-xl leading-5">
                    Tratamiento
                          
                        </h2>
                        <p>
                        Para el tratamiento de la gastroparesía, el médico tendrá que ajustar diferentes areas del cuidado del paciente.

                        </p>
                    </CardContent>
                    <CardActions>
                    <Button size="small"><Link to="/gastroparesia-tratamiento/">Sigue Leyendo</Link></Button>
                    </CardActions>
                </Card>
                <Card className="my-6">
                    <CardContent>
                    <h2 className="text-xl leading-5">
                    Complicaciones
                          
                        </h2>
                        <p>
                        La gastroparesia es una condición crónica, y sobrellevarla puede ser algo abrumador. Es común que aquellos que padezcan esta condición se sientan frustrados y deprimidos.

                        </p>
                    </CardContent>
                    <CardActions>
                    <Button size="small"><Link to="/gastroparesia-complicaciones/">Sigue Leyendo</Link></Button>
                    </CardActions>
                </Card>
                <Card className="my-6">
                    <CardContent>
                    <h2 className="text-xl leading-5">
                    Consejos Dieta
                          
                        </h2>
                        <p>
                        Cuando se tiene diabetes, la mejor forma de prevenir los síntomas de la gastroparesia es variando la forma de cuándo y cómo comer.

                        </p>
                    </CardContent>
                    <CardActions>
                    <Button size="small"><Link to="/gastroparesia-consejo-dieta/">Sigue Leyendo</Link></Button>
                    </CardActions>
                </Card>
                

      </div>



   
  );
}
