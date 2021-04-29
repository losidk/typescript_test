// 联合类型
interface Teacher {
    teachSenior: boolean;
    teach: () => {}
}

interface SeniorTeacher {
    teachSenior: boolean;
    seniorTeach: () => {}
}


function selectTeach(person: Teacher | SeniorTeacher) {
    if (person.teachSenior) {
        (person as Teacher).teach();
    } else {
        (person as SeniorTeacher).seniorTeach();
    }
}