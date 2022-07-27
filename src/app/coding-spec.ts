export const codingSpec = [
    {
        title: 'Allergies and Intolerances',
        description: 'This section documents the relevant allergies or intolerances (conditions) for a patient, describing the kind of reaction (e.g. rash, anaphylaxis,..); preferably the agents that cause it; and optionally the criticality and the certainty of the allergy. At a minimum, it should list currently active and any relevant historical allergies and adverse reactions. If no information about allergies is available, or if no allergies are known this should be clearly documented in the section.',
        bindings: [
            {
                title: 'Allergy intolerance substance (all SNOMED CT)',
                type: 'autocomplete',
                ecl: `< 762766007 | Edible substance (substance)| OR
                < 425620007 | Metal (substance)| OR 
                < 410942007 |Drug or medicament (substance)| OR 
                < 373873005 |Pharmaceutical / biologic product (product)|`,
                value: '',
                note: 'Searching Allergy intolerance substance codes using a complete edition of SNOMED CT.'
            },
            {
                title: 'Allergy intolerance substance (IPS Refset)',
                type: 'autocomplete',
                ecl: `(< 762766007 | Edible substance (substance)| OR
                < 425620007 | Metal (substance)| OR 
                < 410942007 |Drug or medicament (substance)| OR 
                < 373873005 |Pharmaceutical / biologic product (product)|) AND 
                (^816080008 |International Patient Summary|)`,
                value: '',
                note: 'Searching Allergy intolerance substance codes using members of the IPS Refset only.'
            }
        ]
    },
    {
        title: 'Problem List',
        description: 'The IPS problem section lists and describes clinical problems or conditions currently being monitored for the patient.',
        bindings: [
            {
                title: 'Problem List Finding/Situation/Event (all SNOMED CT)',
                type: 'autocomplete',
                ecl: `< 404684003 |Clinical finding (finding)| OR 
                < 272379006 |Event (event)| OR 
                (< 243796009 |Situation with explicit context (situation)| : [0..0] 363589002 |Associated procedure (attribute)| = *)`,
                value: '',
                note: 'Searching problem list codes using a complete edition of SNOMED CT.'
            },
            {
                title: 'Problem List Finding/Situation/Event (IPS Refset)',
                type: 'autocomplete',
                ecl: `(< 404684003 |Clinical finding (finding)| OR 
                < 272379006 |Event (event)| OR 
                (< 243796009 |Situation with explicit context (situation)| : [0..0] 363589002 |Associated procedure (attribute)| = *)) AND 
                (^816080008 |International Patient Summary|)`,
                value: '',
                note: 'Searching problem list codes using members of the IPS Refset only.'
            }
        ]
    },
    {
        title: 'Procedures',
        description: 'In IPS, procedures are used to list and describe the history of clinical procedures performed in the patient, or the procedures for which results are reported.',
        bindings: [
            {
                title: 'Procedures (all SNOMED CT)',
                type: 'autocomplete',
                ecl: `(< 71388002 |Procedure (procedure)|)`,
                value: '',
                note: 'Searching procedure codes using a complete edition of SNOMED CT.'
            },
            {
                title: 'Procedures (IPS Refset)',
                type: 'autocomplete',
                ecl: `(< 71388002 |Procedure (procedure)|) AND 
                (^816080008 |International Patient Summary|)`,
                value: '',
                note: 'Searching procedure codes using members of the IPS Refset only.'
            }
        ]
    },
    {
        title: 'Medications',
        description: 'Medications are used to list and describe the history of medications prescribed or consumed by the patient.',
        bindings: [
            {
                title: 'Medications (all SNOMED CT)',
                type: 'autocomplete',
                ecl: `(< 373873005 |Pharmaceutical / biologic product (product)|)`,
                value: '',
                note: 'Searching medication codes using a complete edition of SNOMED CT.'
            },
            {
                title: 'Medications (IPS Refset)',
                type: 'autocomplete',
                ecl: `(< 373873005 |Pharmaceutical / biologic product (product)|) AND 
                (^816080008 |International Patient Summary|)`,
                value: '',
                note: 'Searching medication codes using members of the IPS Refset only.'
            }
        ]
    },
    {
        title: 'Result Organisms',
        description: 'This is a value set of the SNOMED CT organism concepts for use in the Results section observation values.',
        bindings: [
            {
                title: 'Result Organisms (all SNOMED CT)',
                type: 'autocomplete',
                ecl: `(< 410607006 |Organism (organism)|)`,
                value: '',
                note: 'Searching result organism codes using a complete edition of SNOMED CT.'
            },
            {
                title: 'Result Organisms (IPS Refset)',
                type: 'autocomplete',
                ecl: `(< 410607006 |Organism (organism)|) AND 
                (^816080008 |International Patient Summary|)`,
                value: '',
                note: 'Searching result organism codes using members of the IPS Refset only.'
            }
        ]
    },
    {
        title: 'Immunization',
        description: 'This is a value set of the SNOMED CT immunization concepts.',
        bindings: [
            {
                title: 'Immunizations (all SNOMED CT)',
                type: 'autocomplete',
                ecl: `(< 787859002 |Vaccine product|)`,
                value: '',
                note: 'Searching immunization codes using a complete edition of SNOMED CT.'
            },
            {
                title: 'Immunizations (IPS Refset)',
                type: 'autocomplete',
                ecl: `(< 787859002 |Vaccine product|) AND 
                (^816080008 |International Patient Summary|)`,
                value: '',
                note: 'Searching immunization codes using members of the IPS Refset only.'
            }
        ]
    }
]