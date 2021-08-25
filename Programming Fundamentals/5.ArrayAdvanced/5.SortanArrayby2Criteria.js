function sortanArrayBy2Criteria(strings) {
               strings.sort( (a, b) => {
                              let firstCreteria = a.length - b.length;
                              let secondCreteria = a.localeCompare(b);
                              return firstCreteria || secondCreteria;
               })
               // strings.sort( (a, b) => a.length - b.length || a.localeCompare(b)) това е за възходящ ред
               // strings.sort( (a, b) => b.length - a.length) низходящ ред
               // console.log(strings.join('\n'));
               // кратка версия

}
sortanArrayBy2Criteria(["gamma", "alpha", "beta"]);
sortanArrayBy2Criteria(["alpha", "beta", "gamma"]);
sortanArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);