(function() {var implementors = {};
implementors["sr_primitives"] = [{text:"impl <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a> for <a class=\"struct\" href=\"sr_primitives/testing/struct.UintAuthorityId.html\" title=\"struct sr_primitives::testing::UintAuthorityId\">UintAuthorityId</a>",synthetic:false,types:["sr_primitives::testing::UintAuthorityId"]},{text:"impl <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a> for <a class=\"struct\" href=\"sr_primitives/testing/struct.Header.html\" title=\"struct sr_primitives::testing::Header\">Header</a>",synthetic:false,types:["sr_primitives::testing::Header"]},{text:"impl&lt;Xt:&nbsp;<a class=\"trait\" href=\"parity_codec/codec/trait.Encode.html\" title=\"trait parity_codec::codec::Encode\">Encode</a>&gt; <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a> for <a class=\"struct\" href=\"sr_primitives/testing/struct.ExtrinsicWrapper.html\" title=\"struct sr_primitives::testing::ExtrinsicWrapper\">ExtrinsicWrapper</a>&lt;Xt&gt;",synthetic:false,types:["sr_primitives::testing::ExtrinsicWrapper"]},{text:"impl&lt;Xt&gt; <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a> for <a class=\"struct\" href=\"sr_primitives/testing/struct.Block.html\" title=\"struct sr_primitives::testing::Block\">Block</a>&lt;Xt&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Xt: <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a>,&nbsp;</span>",synthetic:false,types:["sr_primitives::testing::Block"]},{text:"impl&lt;Call&gt; <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a> for <a class=\"struct\" href=\"sr_primitives/testing/struct.TestXt.html\" title=\"struct sr_primitives::testing::TestXt\">TestXt</a>&lt;Call&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"sr_primitives/testing/struct.TestXt.html\" title=\"struct sr_primitives::testing::TestXt\">TestXt</a>&lt;Call&gt;: <a class=\"trait\" href=\"parity_codec/codec/trait.Encode.html\" title=\"trait parity_codec::codec::Encode\">Encode</a>,&nbsp;</span>",synthetic:false,types:["sr_primitives::testing::TestXt"]},{text:"impl <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a> for <a class=\"struct\" href=\"sr_primitives/traits/struct.BlakeTwo256.html\" title=\"struct sr_primitives::traits::BlakeTwo256\">BlakeTwo256</a>",synthetic:false,types:["sr_primitives::traits::BlakeTwo256"]},{text:"impl&lt;Address:&nbsp;<a class=\"trait\" href=\"parity_codec/codec/trait.Codec.html\" title=\"trait parity_codec::codec::Codec\">Codec</a>, Index:&nbsp;<a class=\"trait\" href=\"parity_codec/codec/trait.HasCompact.html\" title=\"trait parity_codec::codec::HasCompact\">HasCompact</a> + <a class=\"trait\" href=\"parity_codec/codec/trait.Codec.html\" title=\"trait parity_codec::codec::Codec\">Codec</a>, Signature:&nbsp;<a class=\"trait\" href=\"parity_codec/codec/trait.Codec.html\" title=\"trait parity_codec::codec::Codec\">Codec</a>, Call:&nbsp;<a class=\"trait\" href=\"parity_codec/codec/trait.Encode.html\" title=\"trait parity_codec::codec::Encode\">Encode</a>&gt; <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a> for <a class=\"struct\" href=\"sr_primitives/generic/struct.UncheckedExtrinsic.html\" title=\"struct sr_primitives::generic::UncheckedExtrinsic\">UncheckedExtrinsic</a>&lt;Address, Index, Call, Signature&gt;",synthetic:false,types:["sr_primitives::generic::unchecked_extrinsic::UncheckedExtrinsic"]},{text:"impl&lt;Address:&nbsp;<a class=\"trait\" href=\"parity_codec/codec/trait.Encode.html\" title=\"trait parity_codec::codec::Encode\">Encode</a>, Index:&nbsp;<a class=\"trait\" href=\"parity_codec/codec/trait.Encode.html\" title=\"trait parity_codec::codec::Encode\">Encode</a>, Signature:&nbsp;<a class=\"trait\" href=\"parity_codec/codec/trait.Encode.html\" title=\"trait parity_codec::codec::Encode\">Encode</a>, Call:&nbsp;<a class=\"trait\" href=\"parity_codec/codec/trait.Encode.html\" title=\"trait parity_codec::codec::Encode\">Encode</a>&gt; <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a> for <a class=\"struct\" href=\"sr_primitives/generic/struct.UncheckedMortalExtrinsic.html\" title=\"struct sr_primitives::generic::UncheckedMortalExtrinsic\">UncheckedMortalExtrinsic</a>&lt;Address, Index, Call, Signature&gt;",synthetic:false,types:["sr_primitives::generic::unchecked_mortal_extrinsic::UncheckedMortalExtrinsic"]},{text:"impl&lt;Address:&nbsp;<a class=\"trait\" href=\"parity_codec/codec/trait.Encode.html\" title=\"trait parity_codec::codec::Encode\">Encode</a>, Index, Signature:&nbsp;<a class=\"trait\" href=\"parity_codec/codec/trait.Encode.html\" title=\"trait parity_codec::codec::Encode\">Encode</a>, Call:&nbsp;<a class=\"trait\" href=\"parity_codec/codec/trait.Encode.html\" title=\"trait parity_codec::codec::Encode\">Encode</a>&gt; <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a> for <a class=\"struct\" href=\"sr_primitives/generic/struct.UncheckedMortalCompactExtrinsic.html\" title=\"struct sr_primitives::generic::UncheckedMortalCompactExtrinsic\">UncheckedMortalCompactExtrinsic</a>&lt;Address, Index, Call, Signature&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"parity_codec/codec/struct.Compact.html\" title=\"struct parity_codec::codec::Compact\">Compact</a>&lt;Index&gt;: <a class=\"trait\" href=\"parity_codec/codec/trait.Encode.html\" title=\"trait parity_codec::codec::Encode\">Encode</a>,&nbsp;</span>",synthetic:false,types:["sr_primitives::generic::unchecked_mortal_compact_extrinsic::UncheckedMortalCompactExtrinsic"]},{text:"impl <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a> for <a class=\"enum\" href=\"sr_primitives/generic/enum.Era.html\" title=\"enum sr_primitives::generic::Era\">Era</a>",synthetic:false,types:["sr_primitives::generic::era::Era"]},{text:"impl&lt;Number:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>&gt;, Hash:&nbsp;<a class=\"trait\" href=\"sr_primitives/traits/trait.Hash.html\" title=\"trait sr_primitives::traits::Hash\">HashT</a>&gt; <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a> for <a class=\"struct\" href=\"sr_primitives/generic/struct.Header.html\" title=\"struct sr_primitives::generic::Header\">Header</a>&lt;Number, Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a>,&nbsp;</span>",synthetic:false,types:["sr_primitives::generic::header::Header"]},{text:"impl&lt;Block:&nbsp;<a class=\"trait\" href=\"sr_primitives/traits/trait.Block.html\" title=\"trait sr_primitives::traits::Block\">BlockT</a>&gt; <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a> for <a class=\"enum\" href=\"sr_primitives/generic/enum.BlockId.html\" title=\"enum sr_primitives::generic::BlockId\">BlockId</a>&lt;Block&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a>,&nbsp;</span>",synthetic:false,types:["sr_primitives::generic::block::BlockId"]},{text:"impl&lt;Header, Extrinsic:&nbsp;<a class=\"trait\" href=\"sr_primitives/traits/trait.MaybeSerialize.html\" title=\"trait sr_primitives::traits::MaybeSerialize\">MaybeSerialize</a>&gt; <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a> for <a class=\"struct\" href=\"sr_primitives/generic/struct.Block.html\" title=\"struct sr_primitives::generic::Block\">Block</a>&lt;Header, Extrinsic&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Header: <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Extrinsic: <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a>,&nbsp;</span>",synthetic:false,types:["sr_primitives::generic::block::Block"]},{text:"impl&lt;Block&gt; <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a> for <a class=\"struct\" href=\"sr_primitives/generic/struct.SignedBlock.html\" title=\"struct sr_primitives::generic::SignedBlock\">SignedBlock</a>&lt;Block&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a>,&nbsp;</span>",synthetic:false,types:["sr_primitives::generic::block::SignedBlock"]},{text:"impl&lt;Hash:&nbsp;<a class=\"trait\" href=\"parity_codec/codec/trait.Encode.html\" title=\"trait parity_codec::codec::Encode\">Encode</a> + <a class=\"trait\" href=\"parity_codec/codec/trait.Decode.html\" title=\"trait parity_codec::codec::Decode\">Decode</a>&gt; <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a> for <a class=\"struct\" href=\"sr_primitives/struct.Digest.html\" title=\"struct sr_primitives::Digest\">Digest</a>&lt;Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a>,&nbsp;</span>",synthetic:false,types:["sr_primitives::generic::digest::Digest"]},{text:"impl&lt;Hash:&nbsp;<a class=\"trait\" href=\"parity_codec/codec/trait.Encode.html\" title=\"trait parity_codec::codec::Encode\">Encode</a>&gt; <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a> for <a class=\"enum\" href=\"sr_primitives/enum.DigestItem.html\" title=\"enum sr_primitives::DigestItem\">DigestItem</a>&lt;Hash&gt;",synthetic:false,types:["sr_primitives::generic::digest::DigestItem"]},{text:"impl <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a> for <a class=\"struct\" href=\"sr_primitives/struct.Permill.html\" title=\"struct sr_primitives::Permill\">Permill</a>",synthetic:false,types:["sr_primitives::Permill"]},{text:"impl <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a> for <a class=\"struct\" href=\"sr_primitives/struct.Perbill.html\" title=\"struct sr_primitives::Perbill\">Perbill</a>",synthetic:false,types:["sr_primitives::Perbill"]},{text:"impl <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a> for <a class=\"struct\" href=\"sr_primitives/struct.PerU128.html\" title=\"struct sr_primitives::PerU128\">PerU128</a>",synthetic:false,types:["sr_primitives::PerU128"]},{text:"impl <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a> for <a class=\"enum\" href=\"sr_primitives/enum.MultiSigner.html\" title=\"enum sr_primitives::MultiSigner\">MultiSigner</a>",synthetic:false,types:["sr_primitives::MultiSigner"]},{text:"impl <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a> for <a class=\"struct\" href=\"sr_primitives/struct.AnySignature.html\" title=\"struct sr_primitives::AnySignature\">AnySignature</a>",synthetic:false,types:["sr_primitives::AnySignature"]},{text:"impl <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a> for <a class=\"enum\" href=\"sr_primitives/enum.ApplyOutcome.html\" title=\"enum sr_primitives::ApplyOutcome\">ApplyOutcome</a>",synthetic:false,types:["sr_primitives::ApplyOutcome"]},{text:"impl <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a> for <a class=\"enum\" href=\"sr_primitives/enum.ApplyError.html\" title=\"enum sr_primitives::ApplyError\">ApplyError</a>",synthetic:false,types:["sr_primitives::ApplyError"]},{text:"impl <a class=\"trait\" href=\"sr_primitives/trait.Serialize.html\" title=\"trait sr_primitives::Serialize\">Serialize</a> for <a class=\"struct\" href=\"sr_primitives/struct.OpaqueExtrinsic.html\" title=\"struct sr_primitives::OpaqueExtrinsic\">OpaqueExtrinsic</a>",synthetic:false,types:["sr_primitives::OpaqueExtrinsic"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()