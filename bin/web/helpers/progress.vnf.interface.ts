export default interface ProgressVnfInterface {
    init(speed : number) : ProgressVnfInterface;
    update(process : number) : ProgressVnfInterface;
    stop() : ProgressVnfInterface;
    increment() : ProgressVnfInterface;
}