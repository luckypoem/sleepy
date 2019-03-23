import GetGithubIssue from './GetGithubIssue';
import {
    github,
    post
} from '../sleepy.config';

export default new GetGithubIssue({
    ...github,
    ...post
});