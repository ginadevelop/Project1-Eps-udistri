import { Table, Column, Model, DataType, PrimaryKey, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Doctor } from './doctores.model'
import { Paciente } from './paciente.model'
import { Especializacion } from './especializacion.model';
import { Consultorio } from './consultorio.model';


@Table({
  timestamps : false,
  tableName: 'cita',
})
export class Cita extends Model {
  @Column({
      type: DataType.DATE,
      allowNull: false,
      primaryKey: true,
      
  })
  fecha_hora!: Date

  @ForeignKey( () => Doctor)
  @PrimaryKey
  @Column({
      type: DataType.INTEGER,
      allowNull: false,
  })
  id_profesional!: number


  @ForeignKey( () => Paciente)
  @PrimaryKey
  @Column({
       type: DataType.INTEGER,
       allowNull: false,
   })
   id_numeroCedula!: number

  @ForeignKey( () => Especializacion)
  @Column({
      type: DataType.INTEGER,
      allowNull: false,
  })
  id_especializacion!: number
  
  @ForeignKey( () => Consultorio)
  @Column({
      type: DataType.INTEGER,
      allowNull: false,   
  })
  id_consultorio!: number

 

  @BelongsTo(()=> Paciente)
    paciente!: Paciente

  @BelongsTo(()=> Doctor)
    doctor!: Doctor
  
  @BelongsTo(()=> Especializacion)
    especializacion!: Especializacion

  @BelongsTo(()=> Consultorio)
    consultorio!: Consultorio
}