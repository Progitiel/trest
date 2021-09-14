import { Dns } from '../../../types/dns'

import { Website } from '..'

export default class Website_port43 extends Website {
    constructor(hostname: string) {
        super(hostname)
    }

    public async dns(): Promise<Dns | undefined> {
        return
    }
}