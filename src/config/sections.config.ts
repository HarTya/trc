import Biopsy from '@/sections/biopsy/Biopsy'
import Hero from '@/sections/hero/Hero'
import Hyper from '@/sections/hyper/Hyper'
import Projects from '@/sections/projects/Projects'
import Screening from '@/sections/screening/Screening'
import Tells from '@/sections/tells/Tells'
import Test from '@/sections/test/Test'
import Ultrasound from '@/sections/ultrasound/Ultrasound'

import { Section } from '@/types/config.interface'

import { initializeSection } from './helpers/sections.helper'

class Sections {
  Hero = initializeSection('Про рак Щітоподібної залози', Hero)
  Hyper = initializeSection('Посилання', Hyper)
  Projects = initializeSection('Наші проекти', Projects)
  Test = initializeSection('Здорова ли ваша щітоподібна залоза?', Test)
  Screening = initializeSection(
    'Онкоскринiнг на рак щитоподібної залози',
    Screening
  )
  Ultrasound = initializeSection(
    'Узи щітоподібної залози. То, що ви хотіли би знати',
    Ultrasound
  )
  Biopsy = initializeSection(
    'Тонкогольна аспiрацiйна бiопсiя щитовидної залізи',
    Biopsy
  )
  Tells = initializeSection('Історіі людей, що проходили скрінінг', Tells)
}

export const SECTIONS = new Sections()
export const sections: Section[] = Object.values(SECTIONS)
