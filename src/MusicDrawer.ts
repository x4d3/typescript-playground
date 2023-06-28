import { Vex, Flow, Factory, Stave, EasyScore } from "vexflow/bravura";

export class MusicDrawer {
    static generateMusicSheet(elementId: string) {
        const factory = new Factory({
            renderer: { elementId, width: 500, height: 200 },
        });
        const score = factory.EasyScore();
        factory
            .System()
            .addStave({
                voices: [score.voice(score.notes("C#5/q, B4, A4, G#4", { stem: "up" })), score.voice(score.notes("C#4/h, C#4", { stem: "down" }))],
            })
            .addClef("treble")
            .addTimeSignature("4/4");
        factory.draw();
    }
}