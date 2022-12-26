export default interface ProgressVnfInterface {
    init() : ProgressVnfInterface;
    update(process : number) : ProgressVnfInterface;
    stop() : ProgressVnfInterface;
    increment() : ProgressVnfInterface;
}