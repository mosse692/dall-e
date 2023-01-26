import FileSaver from 'file-saver'
import {surpriseMePrompts} from '../constants'

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const RandomPropmpt = surpriseMePrompts[randomIndex]

    if(RandomPropmpt === prompt) return getRandomPrompt(prompt)

    return RandomPropmpt
}

export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`)
} 