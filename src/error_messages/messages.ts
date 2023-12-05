export const responseSuccess = (res: Response|any, data: any,code:Number):void => {
    const SUCCESS_MESSAGE = 'Operación exitosa!'; 
    res.status(code).json({
      message: SUCCESS_MESSAGE,
      data: data,
    });
  };
  
export const errorResponseFailed = (res: Response|any):void =>{
    const FAILURE_MESSAGE = 'El recurso no fue encontrado'
    res.status(404).json({ 
        message: FAILURE_MESSAGE 
      });
};

export const sendErrorServer = (res:Response|any, err:any) =>{
    const ERROR_MESSAGE = 'Ocurrió un error en el servidor';
    res.status(500).json({
        message:ERROR_MESSAGE,
        error: err.message
    })
};
