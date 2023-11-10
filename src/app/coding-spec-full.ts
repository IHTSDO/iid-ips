export const codingSpec = [
    {
        title: 'Allergies and Intolerances',
        description: 'This section documents the relevant allergies or intolerances (conditions) for a patient, describing the kind of reaction (e.g. rash, anaphylaxis,..); preferably the agents that cause it; and optionally the criticality and the certainty of the allergy. At a minimum, it should list currently active and any relevant historical allergies and adverse reactions. If no information about allergies is available, or if no allergies are known this should be clearly documented in the section.',
        bindings: [
            {
                title: 'Allergy intolerance substance (all SNOMED CT)',
                type: 'autocomplete',
                ecl: `< 105590001 |Substance (substance)| OR
                < 373873005 |Pharmaceutical / biologic product (product)| OR 
                < 418038007 |Propensity to adverse reactions to substance (finding)|`,
                value: '',
                note: `Searching problem list codes using a complete edition of SNOMED CT.`
            },
            {
                title: 'Allergy intolerance substance (IPS Refset)',
                type: 'autocomplete',
                ecl: `(< 105590001 |Substance (substance)| OR
                < 373873005 |Pharmaceutical / biologic product (product)| OR 
                < 418038007 |Propensity to adverse reactions to substance (finding)|) AND 
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
                < 243796009 |Situation with explicit context|`,
                value: '',
                note: 'Searching problem list codes using a complete edition of SNOMED CT.'
            },
            {
                title: 'Problem List Finding/Situation/Event (IPS Refset)',
                type: 'autocomplete',
                ecl: `(< 404684003 |Clinical finding (finding)| OR 
                < 272379006 |Event (event)| OR 
                < 243796009 |Situation with explicit context|) AND 
                (^816080008 |International Patient Summary|)`,
                value: '',
                note: 'Searching problem list codes using members of the IPS Refset only.'
            }
        ]
    },
    {
        title: 'Immunizations',
        description: 'The Immunizations Section defines a patient’s current immunization status and pertinent immunization history. The primary use case for the Immunization Section is to enable communication of a patient’s immunization status. The section includes current immunization status and the entire clinically pertinent immunization history that is known.',
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
    },
    {
        title: 'Procedures',
        description: 'In IPS, procedures are used to list and describe the history of clinical procedures performed in the patient, or the procedures for which results are reported.',
        bindings: [
            {
                title: 'Procedures (all SNOMED CT)',
                type: 'autocomplete',
                ecl: `(< 71388002 |Procedure|) MINUS (<< 308335008 |Patient encounter procedure|)`,
                value: '',
                note: 'Searching procedure codes using a complete edition of SNOMED CT.'
            },
            {
                title: 'Procedures (IPS Refset)',
                type: 'autocomplete',
                ecl: `((< 71388002 |Procedure|) MINUS (<< 308335008 |Patient encounter procedure|)) AND 
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
                ecl: `(< 373873005 |Pharmaceutical / biologic product (product)|) MINUS (<<787859002 |Vaccine product (medicinal product)|)`,
                value: '',
                note: 'Searching medication codes using a complete edition of SNOMED CT.'
            },
            {
                title: 'Medications (IPS Refset)',
                type: 'autocomplete',
                ecl: `((< 373873005 |Pharmaceutical / biologic product (product)|) MINUS (<<787859002 |Vaccine product (medicinal product)|)) AND 
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
                ecl: `(< 409822003 |Domain Bacteria (organism)| OR < 414561005 |Kingdom Fungi (organism)| OR < 49872002 |Virus (organism)|)`,
                value: '',
                note: 'Searching result organism codes using a complete edition of SNOMED CT.'
            },
            {
                title: 'Result Organisms (IPS Refset)',
                type: 'autocomplete',
                ecl: `(< 409822003 |Domain Bacteria (organism)| OR < 414561005 |Kingdom Fungi (organism)| OR < 49872002 |Virus (organism)|) AND 
                (^816080008 |International Patient Summary|)`,
                value: '',
                note: 'Searching result organism codes using members of the IPS Refset only.'
            }
        ]
    },
    {
        title: 'Devices',
        description: 'A device used by or implanted on the patient is described that in the patient summary.',
        bindings: [
            {
                title: 'Devices (all SNOMED CT)',
                type: 'autocomplete',
                ecl: `(< 49062001 |Device (physical object)|)`,
                value: '',
                note: 'Searching result organism codes using a complete edition of SNOMED CT.'
            },
            {
                title: 'Devices (IPS Refset)',
                type: 'autocomplete',
                ecl: `(< 49062001 |Device (physical object)|) AND 
                (^816080008 |International Patient Summary|)`,
                value: '',
                note: 'Searching result organism codes using members of the IPS Refset only.'
            }
        ]
    }
]