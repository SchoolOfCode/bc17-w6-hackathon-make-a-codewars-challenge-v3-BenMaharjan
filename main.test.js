import {test, expect} from "vitest";
import { feedCat } from "./main";

test('return False if catState is asleep', ()=>{
    expect(feedCat("asleep",0)).toBe(false);
})

test('return true if cat is playful and has been fed less than 2 times', ()=>{
    expect(feedCat("playful",1)).toBe(true);
})

test('return true if cat is sad and has been fed less than 3 times', ()=>{
    expect(feedCat("sad",2)).toBe(true);
})

test('return false if cat is playful and has been fed 2 times or more', ()=>{
    expect(feedCat("playful",2)).toBe(false);
})

test('return false if cat is sad and has been fed 3 times or more', ()=>{
    expect(feedCat("sad",3)).toBe(false);
})

test('return Cat can only be asleep, playful or sad if catState is not correct', ()=>{
    expect(feedCat(5,1)).toBe("Cat can only be asleep, playful or sad");
})

test('return Cat can only be asleep, playful or sad if catState is not correct', ()=>{
    expect(feedCat("not asleep",1)).toBe("Cat can only be asleep, playful or sad");
})


