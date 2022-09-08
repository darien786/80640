const doGet = (e = {}) => {
  const { parameter } = e;
    const { nombre = 'Arnold', apellido = 'GetSchwarzenegger', tel,dir} = parameter;
    const salida = `Hola ${nombre} ${apellido} tel: ${tel} dir: ${dir}`;
    return ContentService.createTextOutput(salida);

};

 const doPost = (e = {}) => {
    const { parameter } = e;
    const { nombre = 'Arnold', apellido = 'PostSchwarzenegger' ,tel,dir} = parameter;
    const salida = `Hola ${nombre} ${apellido} tel: ${tel} dir: ${dir}`;
    return ContentService.createTextOutput(salida);
  };