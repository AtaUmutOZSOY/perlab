export enum GraduateEnums {
    undergraduate = 0,
    bSc = 1,
    mScCandidate = 2,
    mSc = 3,
    phDCandidate = 4,
    phD = 5,
    postdoc = 6,
    assocProf = 7,
    prof = 8
}

export const GraduateEnumLabels: { [key in GraduateEnums]: string } = {
    [GraduateEnums.undergraduate]: 'Undergraduate',
    [GraduateEnums.bSc]: 'Bachelor of Science',
    [GraduateEnums.mScCandidate]: 'Master of Science Candidate',
    [GraduateEnums.mSc]: 'Master of Science',
    [GraduateEnums.phDCandidate]: 'PhD Candidate',
    [GraduateEnums.phD]: 'Doctor of Philosophy',
    [GraduateEnums.postdoc]: 'Postdoctoral',
    [GraduateEnums.assocProf]: 'Associate Professor',
    [GraduateEnums.prof]: 'Professor'
};
